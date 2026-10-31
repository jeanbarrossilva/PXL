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

const windowSize = pxl.Size.init(pxl.Entity.size * 16);

pub fn main() !void {
    var player = pxl.Entity{
        .x = 0,
        .y = 0,
        .direction = .downward,
        .color = .dark_gray,
    };
    raylib.setTargetFPS(60);
    raylib.initWindow(
        @intCast(windowSize.width),
        @intCast(windowSize.height),
        "PXL",
    );
    defer raylib.closeWindow();
    while (!raylib.windowShouldClose()) {
        _ = &player.move(windowSize);
        raylib.beginDrawing();
        defer raylib.endDrawing();
        raylib.clearBackground(.black);
        player.draw();
    }
}
