
@default:
    just --list

deps:
    clear && npm install

run:
	clear && npm run dev
