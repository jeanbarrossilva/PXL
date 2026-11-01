// Copyright © 2026 Jean Silva
//
// This file is part of the PXL open-source project.
//
// PXL is free software: you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.
//
// PXL is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
// A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with
// this program. If not, see https://www.gnu.org/licenses.

x: isize,
y: isize,
direction: ?Direction,
color: raylib.Color,

pub const size = 32;

const Direction = @import("direction.zig").Direction;
const raylib = @import("raylib");
const Size = @import("Size.zig");
const std = @import("std");

const Position = struct {
    x: isize,
    y: isize,

    pub fn random(rng: std.Random, bounds: Size) Position {
        return .{
            .x = rng.intRangeAtMost(
                isize,
                0,
                @intCast(bounds.width - size),
            ),
            .y = rng.intRangeAtMost(
                isize,
                0,
                @intCast(bounds.height - size),
            ),
        };
    }

    fn overlaps(self: Position, x: isize, y: isize) bool {
        return _overlaps(self.x, self.y, x, y);
    }

    fn _overlaps(x1: isize, y1: isize, x2: isize, y2: isize) bool {
        return x1 == x2 or
            (x1 > x2 and x1 < x2 + size) or
            (y1 > y2 and y1 < y2 + size);
    }
};

pub fn initAsPlayer(rng: std.Random) @This() {
    return .{
        .x = 0,
        .y = 0,
        .direction = .random(rng),
        .color = .dark_gray,
    };
}

pub fn initAsFruit(
    rng: std.Random,
    bounds: Size,
    sampling: *const []@This(),
) @This() {
    var position = Position.random(rng, bounds);
    var index: usize = 0;
    while (index < sampling.len) {
        const sample = sampling.*[index];
        if (position.overlaps(sample.x, sample.y)) {
            position = .random(rng, bounds);
            index = 0;
        } else {
            index += 1;
        }
    }
    return .{
        .x = rng.intRangeAtMost(isize, 0, @intCast(bounds.width - size)),
        .y = rng.intRangeAtMost(isize, 0, @intCast(bounds.height - size)),
        .direction = null,
        .color = .green,
    };
}

pub fn isInCollision(self: @This(), other: @This()) bool {
    return Position._overlaps(self.x + 1, self.y + 1, other.x, other.y);
}

pub fn draw(self: @This()) void {
    raylib.drawRectangle(
        @intCast(self.x),
        @intCast(self.y),
        size,
        size,
        self.color,
    );
}

pub fn move(self: *@This(), bounds: Size) void {
    const direction = self.direction orelse return;
    const dt = raylib.getFrameTime();
    const displacement: isize =
        @intCast(@as(i32, @intFromFloat(@This().size * 8 * dt)));
    inline for (std.enums.values(Direction)) |d| {
        for (d.keys()) |key| {
            if (!raylib.isKeyDown(key))
                continue;
            self.direction =
                self.moveTowardOrAwayFromDirection(bounds, d, displacement);
            return;
        }
    }
    self.direction =
        self.moveTowardOrAwayFromDirection(bounds, direction, displacement);
}

fn moveTowardOrAwayFromDirection(
    self: *@This(),
    bounds: Size,
    direction: Direction,
    displacement: isize,
) Direction {
    switch (direction) {
        .backward => {
            if (bounds.containsInXAxis(self.x - displacement, size)) {
                self.x -= displacement;
                return direction;
            } else {
                self.x += displacement;
                return .forward;
            }
        },
        .upward => {
            if (bounds.containsInYAxis(self.y - displacement, size)) {
                self.y -= displacement;
                return direction;
            } else {
                self.y += displacement;
                return .downward;
            }
        },
        .forward => {
            if (bounds.containsInXAxis(self.x + displacement, size)) {
                self.x += displacement;
                return direction;
            } else {
                self.x -= displacement;
                return .backward;
            }
        },
        .downward => {
            if (bounds.containsInYAxis(self.y + displacement, size)) {
                self.y += displacement;
                return direction;
            } else {
                self.y -= displacement;
                return .upward;
            }
        },
    }
}
