{ pkgs, lib, config, inputs, ... }:

{
  stdenv = if pkgs.stdenv.isDarwin then pkgs.stdenvNoCC else pkgs.stdenv;

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_20;
  };
}
