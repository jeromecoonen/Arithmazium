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
	python3 $(injector) bugjar
	python3 $(injector) mailroom
	python3 $(injector) numbers
	python3 $(injector) paranoia
	python3 $(injector) arithmetic
	python3 $(injector) classroom
	python3 $(injector) fitness
	python3 $(injector) dinosaur
	python3 $(injector) library

.PHONY: diagrams
diagrams:
	rm -f paranoia/img/*-auto.svg
	rm -f classroom/img/*-auto.svg
	python3 $(svg_builder) paranoia
	python3 $(svg_builder) classroom

.PHONY: clean
clean:
	rm paranoia/img/*-auto.svg

.PHONY: git
git:
	git add .
	git commit -m "auto"
	git push

