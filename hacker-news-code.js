
const HNAdapter = createDomScrapingAdapter({
  name: "Hacker News",

  // Specify when the adapter should be enabled, based on current URL
  enabled() {
    return (
      urlExact("news.ycombinator.com/") ||
      urlContains("news.ycombinator.com/news") ||
      urlContains("news.ycombinator.com/newest")
    );
  },

  // Define the name and type of each column in the table
  attributes: [
    { name: "id", type: "text", hidden: true },
    { name: "rank", type: "numeric" },
    { name: "title", type: "text" },
    { name: "link", type: "text" },
  ],

  // Define scraping logic for extracting data
  scrapePage() {
    return Array.from(document.querySelectorAll("tr.athing")).map((el) => {
      let detailsRow = el.nextElementSibling;
      let spacerRow = detailsRow.nextElementSibling;

      return {
        // Return a unique ID for each row
        id: String(el.getAttribute("id")),

        // Return DOM elements corresponding to this row
        // (this enables DOM manipulation for sorting/filtering)
        rowElements: [el, detailsRow, spacerRow],

        // Return data values for the row by scraping
        dataValues: {
          rank: el.querySelector("span.rank"),
          title: el.querySelector("a.storylink"),
          link: el.querySelector("a.storylink").getAttribute("href"),
        },

        // Specify where annotations should be injected
        annotationContainer: detailsRow.querySelector("td.subtext") as HTMLElement,
        annotationTemplate: `| <span style="color: #f60;">$annotation</span>`,
      };
    });
  },
});

export default HNAdapter;
