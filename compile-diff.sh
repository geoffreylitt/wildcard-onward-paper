set -e

latexdiff initial-submission.tex paper.tex > diff.tex
pdflatex diff.tex
bibtex diff
pdflatex -interaction=batchmode diff.tex
pdflatex -interaction=batchmode diff.tex
open diff.pdf
