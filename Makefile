HUGO ?= hugo
OINK_LOCAL ?= $(HOME)/pgsty/oink
PORT ?= 1327

# Production uses themes/oink; dev uses the selected local checkout.
export GOWORK := off
export HUGO_MODULE_WORKSPACE := off
PINNED_HUGO = env -u HUGO_MODULE_REPLACEMENTS $(HUGO)
LOCAL_HUGO = env -u HUGO_MODULE_REPLACEMENTS $(HUGO) --themesDir "$(abspath $(OINK_LOCAL)/..)" --theme "$(notdir $(abspath $(OINK_LOCAL)))"

DESTINATION ?= public
.PHONY: build check preview sync
build:
	$(PINNED_HUGO) --destination "$(DESTINATION)" --cleanDestinationDir --gc --minify --environment production --printPathWarnings --panicOnWarning
check: build
	python3 scripts/check_site.py --public-dir "$(DESTINATION)"
preview:
	$(PINNED_HUGO) server --bind 127.0.0.1 --port 1327
sync:
	python3 scripts/sync_public.py .cache/production-review public

dev: theme-local
	$(LOCAL_HUGO) server --renderToMemory --bind 127.0.0.1 --port "$(PORT)" --noBuildLock

.PHONY: dev

# Fail explicitly if a local theme was requested but is unavailable.
theme-local:
	@test -f "$(OINK_LOCAL)/hugo.yaml" || { echo "Set OINK_LOCAL to an OINK checkout (default: ~/pgsty/oink)." >&2; exit 1; }

.PHONY: theme-local
