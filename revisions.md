These are revisions requested by the reviewers. Checked off if they've been addressed.

- [ ] One thing I would have liked to see is a code example of a DOM scraping adapter.
- [ ] Does the DOM scraping adapter return a DOM element corresponding to each table row, in addition to a DOM element for each table cell?
- [x] “could directly accesses” should be “could directly access” (line 616)
- [x] “et al.” should have a period after the “al”
- [x] “intermediate visibility of results” should be “visibility of intermediate results”? (line 1068)

* [ ] INTRODUCTION
* [x] @87 requiring less "skill" is questionable: advanced end-user programming, such as spreadsheets, or Splunk's table UI + formula language can get pretty complicated
  - removed that claim from the intro, since it seemed like an unnecessary sentence anyway. Later parts of the paper (esp Section 5.1) discuss the claim in more detail
* [x] @107 the example at first does not sound compelling: Hacker News is, by today's standards, an unusually simple website
  - removed specific mention of HN from the intro, tried to emphasize later that it's just one example of many
* [ ] @136 scraping logic is outside of the work's main focus (accidental complexity)
* [ ] EXAMPLE SCENARIO
* [ ] @206 Sorting by points - limitation of the scraping model becomes clear: this sorts by points only the items on page 1, right? => answered in @759
* [ ] @214 what about discoverability, how would an end-user learn that ReadTimeInSeconds is available?
* [ ] @347 the set of extensibility points is predetermined: here is where the software customization is truly happening, at the scripting level
* [ ] @370 the web application could simply filter by links that were clicked via the application (which doesn't cover links visited through other means in the same browser, but it's a fair approximation)
* [ ] SYSTEM ARCHITECTURE
* [ ] @461 why would columns be read-only? isn't the point to allow the user to make edits to things that weren't designed to be edited?
* [ ] @466 changes to the data happening under the user's feet would be a frustrating user experience; in EUP applications the data graph being manipulated is generally static and only reacts to user changes. Any insights on how to deal with that?
* [ ] Abstract interface
* [ ] @480 Is the fact that all data is combined into a single table presented to the user an intentional aspect of the design or a simplification of the prototype?
* [ ] DOM scraping adapters
* [ ] @493 Scraping is doomed to bit-rot. How would a web application author provide metadata for Wildcard capability? => answered in @610
* [ ] @500 Is Wildcard able to provide any functionality to websites that do not have a site-spceific adapter?
* [ ] @544 It would be better to let the user decide what is useful (in this particular example: I might prefer to add the "looks fun!" annotation as "[looks fun!] Title" instead of the programmer-conceived annotation space
* [ ] @551 Can the adapter author expose formulas? In this example, providing the user with the pre-cooked substring regex operation would allow the user to change it as they wish.
* [ ] @636 How about a user sharing their own information across websites? Wildcard describes most of the hard work associated with making website mashups (e.g. travel information inside the email client). @214 describes a programmer-provided integration of this kind; shouldn't it be possible for users to cross-reference application tables and do the same?
* [ ] @674 This is a fundamental difference from how spreadsheets work and seems very biased towards database-style CRUD applications (as evidenced by the examples of SIEUFERD and Airtable). Is this the target of the model?
* [ ] No discussion on the formula language employed?
* [ ] REFLECTIONS ON USAGE
* [ ] @711 this is an important question -- this question is closely related to the choices that went into the design of Wildcard (e.g. per column vs. per cell formulas)
* [ ] @713 Is the feasibility of web scraping a key question in end-user software customization by direct manipulation of tabular data?
* [ ] @747 This surprise illustrates how programmers should not try to guess what the end-user will or will not find useful when providing customization support (@461).
* [ ] @750 Kudos for not avoiding this topic!
* [ ] @771 All customizations listed in Table 1 fell in 4 categories: adding metadata (3), sort (6), filter (4), alternative input (3). Are there any other types of customizations that were envisioned and which would be possible with this model?
* [ ] @814 It seems formulas were used mostly to bridge API calls and the actual "spreadsheet" aspect did not take center stage
* [ ] @922 What would be an example of a website whose data does not map to a table?
* [ ] @919 This paragraph does not clarify which of the limitations listed are fundamental to the paradigm and which ones are specific to the Wildcard extension
* [ ] @930 "It didn't seem possible" -> this sounds like the people attempting to use Wildcard here are not the same who developed it.
* [ ] KEY THEMES
* [ ] @1158 The apparently small use of formulas in the customizations listed in the previous example seems to provide little support for the hypothesis. All customizations that went beyond sorting and filtering seem to have had custom adapter code written for them, is that right?
* [ ] @1166 Aren't they currently able, via scripting? I thought the example @955 was a contribution from a Wildcard end-user. Perhaps what is meant is that the scripting interface is not exposed via the extension itself?
* [ ] @1233 The idea of many other use-cases given a more general spreadsheet interface seems natural, but does sorting and filtering gets you 80% there with regard to what's possible with or wanted from web scraping tools?
* [ ] @1270 "rather than interacting with databases": given the column-oriented nature of Wildcard (@711) and well as the semantic wrapper approach discussed in 5.2, it seems to me that Wildcard _does_ amount to interacting with databases. It seems that is the main thing that Wildcard does: it abstracts a website from its interface into a database that a user can manipulate, spreadsheet-style.
* [ ] @1276 Formulas (queries) are manipulated through their textual representation rather by their results. A concrete example on how this influence is reflected in Wildcard would help to clarify.
* [ ] @1298 Many of these backend APIs reflect the data model presented by the frontend quite directly (e.g. making calls to Trello API to change card status is reflected by the frontend instantly) -- it seems that APIs _are_ the abstraction barrier described in @1140 provided by application authors for extensibility in a stable way. both approaches could be at least combined.

- [x] ReadTimeInSeconds(url) seems to be a function offered by your engine. It would be useful to mention briefly how that is calculated.
- [ ] It is not clear how the system decides what adapter to apply to a given website. Do you maybe have a library of adapters stored locally that match against a given domain? If yes, would you consider these adapters as plugins to the browser? If no, please explain. You touch on this subject in section 5.2, but it is still not clear how it works. I believe it should be more prominently and earlier addressed.
- [ ] Have you considered what happens when one page offers more than one contiguous list of items?
- [x] I very much like the focus on the practical consideration around IDs, and the heuristic of equating them with URLs. On the web, this is an often occurrence. This is a concrete example of why I think you want to narrow your claims to the area of the web. It would strengthen your work.
- [ ] About the idea of shared storage adapter: indeed, it can be interesting, but it is out of the scope of this paper. I believe removing this mentioning at this point will help focusing the paper on a single message.
- [ ] I did not understand the point and mechanism exemplified in Figure 7 and section 4.1.4 about controlling the editing experience. Please rephrase.
