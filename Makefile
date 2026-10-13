HUGO ?= hugo
DESTINATION ?= public
.PHONY: build check preview sync
build:
	$(HUGO) --destination "$(DESTINATION)" --cleanDestinationDir --gc --minify --environment production --printPathWarnings --panicOnWarning
check: build
	python3 scripts/check_site.py --public-dir "$(DESTINATION)"
preview:
	$(HUGO) server --bind 127.0.0.1 --port 1327
sync:
	python3 scripts/sync_public.py .cache/production-review public
