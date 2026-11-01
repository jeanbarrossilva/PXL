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

    pub fn random(rng: std.Random) Direction {
        const all = std.enums.values(Direction);
        const index = rng.intRangeAtMost(usize, 0, all.len - 1);
        return all[index];
    }

    pub fn keys(self: Direction) [2]raylib.KeyboardKey {
        return switch (self) {
            .backward => key_matrix[0],
            .upward => key_matrix[1],
            .forward => key_matrix[2],
            .downward => key_matrix[3],
        };
    }
};
