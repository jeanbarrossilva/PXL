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

const raylib = @import("raylib");
const std = @import("std");

pub const Entity = struct {
    x: isize,
    y: isize,
    direction: Direction,
    color: raylib.Color,

    pub const size = 32;

    pub fn draw(self: Entity) void {
        raylib.drawRectangle(
            @intCast(self.x),
            @intCast(self.y),
            size,
            size,
            self.color,
        );
    }

    pub fn move(self: *Entity, bounds: Size) void {
        const dt = raylib.getFrameTime();
        const displacement: isize =
            @intCast(@as(i32, @intFromFloat(Entity.size * 8 * dt)));
        inline for (std.enums.values(Direction)) |direction| {
            for (direction.keys()) |key| {
                if (!raylib.isKeyDown(key))
                    continue;
                self.direction = self.moveTowardOrAwayFromDirection(
                    bounds,
                    direction,
                    displacement,
                );
                return;
            }
        }
        self.direction = self.moveTowardOrAwayFromDirection(
            bounds,
            self.direction,
            displacement,
        );
    }

    fn moveTowardOrAwayFromDirection(
        self: *Entity,
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
};
pub const Direction = enum {
    backward,
    upward,
    forward,
    downward,

    const key_matrix = [4][2]raylib.KeyboardKey{
        .{ .left, .a },
        .{ .up, .w },
        .{ .right, .d },
        .{ .down, .s },
    };

    pub fn keys(self: Direction) [2]raylib.KeyboardKey {
        return switch (self) {
            .backward => key_matrix[0],
            .upward => key_matrix[1],
            .forward => key_matrix[2],
            .downward => key_matrix[3],
        };
    }
};
pub const Size = struct {
    width: usize,
    height: usize,

    pub fn init(size: usize) Size {
        return .{
            .width = size,
            .height = size,
        };
    }

    fn containsInXAxis(
        self: Size,
        x: isize,
        width: usize,
    ) bool {
        return x >= 0 and x + @as(isize, @intCast(width)) <= self.width;
    }

    fn containsInYAxis(
        self: Size,
        y: isize,
        height: usize,
    ) bool {
        return y >= 0 and y + @as(isize, @intCast(height)) <= self.height;
    }
};
