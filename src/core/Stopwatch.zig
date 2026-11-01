laps: std.AutoHashMap(uuid.Uuid, Lap),

const raylib = @import("raylib");
const std = @import("std");
const uuid = @import("uuid");

const Lap = struct {
    mark: f64,
    interval: f64,
    is_due: bool,
};

pub fn init(allocator: std.mem.Allocator) @This() {
    return .{ .laps = .init(allocator) };
}

pub fn scheduleLap(
    self: *@This(),
    io: std.Io,
    interval: f64,
) std.mem.Allocator.Error!u128 {
    const id = uuid.v4.new(io);
    try self.laps.put(id, .{
        .mark = 0,
        .interval = interval,
        .is_due = interval <= 0,
    });
    return id;
}

pub fn tick(self: *@This()) void {
    var iterator = self.laps.iterator();
    while (iterator.next()) |entry| {
        const lap = entry.value_ptr;
        if (lap.is_due)
            continue;
        const time = raylib.getTime();
        if (time - lap.mark < lap.interval)
            continue;
        lap.mark = time;
        lap.is_due = true;
    }
}

pub fn resetLap(self: @This(), id: u128) bool {
    const lap = self.laps.getPtr(id) orelse return false;
    const was_due = lap.*.is_due;
    if (was_due)
        lap.*.is_due = false;
    return was_due;
}

pub fn deinit(self: *@This()) void {
    self.laps.deinit();
}
