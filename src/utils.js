function filterByTag(bylines, tag) {
    const filteredBylines = bylines.filter(byline => byline.frontmatter.tag === tag);
    return filteredBylines.sort((a, b) => {
        if (a.frontmatter.tag < b.frontmatter.tag) return -1;
        if (a.frontmatter.tag > b.frontmatter.tag) return 1;
        return 0;
    });
}

function sortByTag(bylines) {
    const tags = {};
    bylines.forEach(byline => {
        const tag = byline.frontmatter.tag;
        if (!tags[tag]) {
            tags[tag] = [];
        }
        tags[tag].push(byline);
    });
    return tags;
}

// Example usage:
// Assuming 'bylines' is your collection of markdown posts
// 'bylines' should be an array of objects where each object contains frontmatter property
// with a 'tag' property inside it.

// Example:
// const bylines = [{frontmatter: { tag: "tag1" }}, {frontmatter: { tag: "tag2" }}, {frontmatter: { tag: "tag1" }}];

// Filter and sort by a specific tag
// const filteredByTag = filterByTag(bylines, 'tag1');
// console.log(filteredByTag);

// Sort by tag and return an array for each tag
// const sortedByTag = sortByTag(bylines);
// console.log(sortedByTag);
