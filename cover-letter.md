# Cover Letter about Revisions

We received the guidance that the reviewers did not produce a specific list of recommended changes for this paper, so we should address a wide selection of reviewer comments.

Here is a brief summary of the largest changes:

- Focusing on the larger vision: In response to #10B, we extended Section 5 with a new subsection about our vision for how this style of customization could lead to new software architectures. We also edited the abstract and introduction to place more weight on the underlying concepts rather than the Wildcard implementation. In response to #10B's critique that "it jumps straight to the example" we did try moving Section 5 earlier in the paper, but ultimately decided that starting with the concrete examples made it easier to follow the rest of the paper.
- Clarifying how scraping works: In response to #10A, we added a code sample of a scraper. We also rewrote our description of how DOM scraping adapters work to clarify certain aspects, including how sorting and filtering operations are applied (in response to #10A), and how we choose which adapters to apply to a website (in response to #10C).
- In response to #10C, we removed the discussion of the hypothetical shared storage adapter from the implementation section. However, we opted to include a shorter version of this material later in Section 5, when discussing future possibilities for the paradigm.
- We renamed "table-driven customization" to "data-driven customization," to put more of a focus on the general idea of exposing structured data representations rather than the specific tabular representation.

In addition, we made many smaller changes responding to specific comments from all the reviewers. These should hopefully be self-evident from looking at the diff between the old and new paper.