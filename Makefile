PYDIR = ~/PycharmProjects/Paranoia/venv/
injector = $(PYDIR)block_injector.py
catcher = $(PYDIR)block_catcher.py
svg_builder = $(PYDIR)svg_builder.py
make_source_pages = $(PYDIR)make_source_pages.py

.PHONY: site
site: diagrams
	python3 $(make_source_pages)
	python3 $(catcher)
	python3 $(injector) entrance
	python3 $(injector) essentials
	python3 $(injector) mailroom
	python3 $(injector) numbers
	python3 $(injector) paranoia

.PHONY: diagrams
diagrams:
	rm -f paranoia/img/*-auto.svg
	python3 $(svg_builder)

.PHONY: clean
clean:
	rm paranoia/img/*-auto.svg

