
@default:
    just --list

deps:
    clear && pnpm install

run:
	clear && pnpm run dev
