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

width: usize,
height: usize,

pub fn init(size: usize) @This() {
    return .{
        .width = size,
        .height = size,
    };
}

pub fn containsInXAxis(self: @This(), x: isize, width: usize) bool {
    return x >= 0 and x + @as(isize, @intCast(width)) <= self.width;
}

pub fn containsInYAxis(self: @This(), y: isize, height: usize) bool {
    return y >= 0 and y + @as(isize, @intCast(height)) <= self.height;
}
