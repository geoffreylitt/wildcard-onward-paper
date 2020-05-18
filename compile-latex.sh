set -e

pandoc \
  --filter conditional-render \
  --filter pandoc-crossref \
  --filter pandoc-citeproc \
  -s \
  -o \
  paper.tex \
  --template=sigplan.pandoc \
  --natbib \
  --metadata=format:pdf \
  paper.md

pdflatex paper.tex
# bibtex paper
# pdflatex -interaction=batchmode paper.tex
# pdflatex -interaction=batchmode paper.tex
open paper.pdf
