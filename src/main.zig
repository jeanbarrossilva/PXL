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

const pxl = @import("pxl");
const raylib = @import("raylib");
const std = @import("std");

const bounds = pxl.Size.init(pxl.Entity.size * 16);
const fruitSpawningInterval = 4;

pub fn main(init: std.process.Init) !void {
    const io_source = std.Random.IoSource{ .io = init.io };
    const rng = io_source.interface();
    var stopwatch = pxl.Stopwatch.init(init.gpa);
    defer stopwatch.deinit();
    var player = pxl.Entity.initAsPlayer(rng);
    var fruits = std.ArrayList(pxl.Entity).empty;
    defer fruits.deinit(init.gpa);
    const fruitSpawnScheduleID = try stopwatch.scheduleLap(init.io, 4);
    raylib.setTargetFPS(60);
    raylib.initWindow(
        @intCast(bounds.width),
        @intCast(bounds.height),
        "PXL",
    );
    defer raylib.closeWindow();
    while (!raylib.windowShouldClose()) {
        stopwatch.tick();
        _ = &player.move(bounds);
        if (stopwatch.resetLap(fruitSpawnScheduleID)) {
            const fruit = pxl.Entity.initAsFruit(rng, bounds, &fruits.items);
            try fruits.append(init.gpa, fruit);
        }
        raylib.beginDrawing();
        defer raylib.endDrawing();
        raylib.clearBackground(.black);
        for (fruits.items) |fruit|
            fruit.draw();
        player.draw();
    }
}
