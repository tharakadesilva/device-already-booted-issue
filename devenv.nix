{ pkgs, lib, config, inputs, ... }:

{
  # On macOS we want to use the clang compiler that is provided by Xcode.
  stdenv = if pkgs.stdenv.isDarwin then pkgs.stdenvNoCC else pkgs.stdenv;

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_20;
  };
}
