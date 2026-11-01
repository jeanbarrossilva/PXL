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

const std = @import("std");

pub fn build(b: *std.Build) void {
    const target = b.standardTargetOptions(.{});
    const optimize = b.standardOptimizeOption(.{});
    const mod = b.addModule("pxl", .{
        .root_source_file = b.path("src/root.zig"),
        .target = target,
    });
    const exe = b.addExecutable(.{
        .name = "pxl",
        .root_module = b.createModule(.{
            .root_source_file = b.path("src/main.zig"),
            .target = target,
            .optimize = optimize,
            .imports = &.{
                .{ .name = "pxl", .module = mod },
            },
        }),
    });

    // === RAYLIB: start ===
    const raylib_dependency = b.dependency("raylib_zig", .{
        .target = target,
        .optimize = optimize,
    });
    const raylib_module = raylib_dependency.module("raylib");
    const raygui_module = raylib_dependency.module("raygui");
    const raylib_artifact = raylib_dependency.artifact("raylib");
    mod.linkLibrary(raylib_artifact);
    mod.addImport("raylib", raylib_module);
    mod.addImport("ragui", raygui_module);
    exe.root_module.linkLibrary(raylib_artifact);
    exe.root_module.addImport("raylib", raylib_module);
    exe.root_module.addImport("raygui", raygui_module);
    // === RAYLIB: end   ===

    // === UUID: start   ===
    const uuid_dependency = b.dependency("uuid", .{
        .target = target,
        .optimize = optimize,
    });
    const uuid_module = uuid_dependency.module("uuid");
    mod.addImport("uuid", uuid_module);
    exe.root_module.addImport("uuid", uuid_module);
    // === UUID: end     ===

    b.installArtifact(exe);
    const run_step = b.step("run", "Run the app");
    const run_cmd = b.addRunArtifact(exe);
    run_step.dependOn(&run_cmd.step);
    run_cmd.step.dependOn(b.getInstallStep());
    if (b.args) |args| {
        run_cmd.addArgs(args);
    }
    const mod_tests = b.addTest(.{
        .root_module = mod,
    });
    const run_mod_tests = b.addRunArtifact(mod_tests);
    const exe_tests = b.addTest(.{
        .root_module = exe.root_module,
    });
    const run_exe_tests = b.addRunArtifact(exe_tests);
    const test_step = b.step("test", "Run tests");
    test_step.dependOn(&run_mod_tests.step);
    test_step.dependOn(&run_exe_tests.step);
}
