---
id: 10
title: Web Crawler & Search Engine
description: a web crawler + search engine that can systematically traverse and index all pages within the University of California, Irvine website domain
tech: python js html css
logo: /images/companies/uci.png
website:
github:
twitter: KimchiiJoe
---

# Web Crawler and Search Engine Project

## Overview

As part of my coursework at UCI, I undertook a comprehensive project to develop a web crawler and a search engine. This project was divided into two main parts: building a web crawler to collect data from specified UCI domains and implementing a search engine to index and retrieve relevant information from the collected data.

---

## Part 1: Web Crawler Development

**Objective:** Implement a web crawler to gather data from specified UCI domains:

- \*.ics.uci.edu/\*
- \*.cs.uci.edu/\*
- \*.informatics.uci.edu/\*
- \*.stat.uci.edu/\*

**Key Tasks:**

- **Crawler Implementation:** Installed necessary libraries and configured the crawler. Implemented a scraper function to parse web responses, extract information, and return valid URLs.
- **Crawler Behavior:** Ensured politeness by honoring delays, avoided web traps, and handled redirects and dead URLs. Transformed relative URLs to absolute URLs.
- **Monitoring and Maintenance:** Monitored the crawler to ensure proper functionality, addressed issues, and restarted as needed.

**Analytical Deliverables:**

- **Unique Pages:** Counted unique pages by URL, ignoring fragments.
- **Longest Page:** Identified the longest page by the number of words (excluding HTML).
- **Common Words:** Listed the 50 most frequent words, excluding stop words.
- **Subdomains:** Counted and listed subdomains in `ics.uci.edu`.

**Tools and Technologies:**

- **Libraries:** BeautifulSoup, lxml, nltk, pandas, urllib.parse, collections, unidecode, numpy, langchain, configparser, argparse, threading
- **Development Environment:** UCI openlab machines and VPN for off-campus access.

---

## Part 2: Search Engine Development

**Objective:** Implement a search engine to index and retrieve information from the data collected by the web crawler.

**Milestones:**

1. **Milestone 1: Build an Index**

   - **Goal:** Create an inverted index for the corpus.
   - **Tasks:** Design the structure of the postings, calculate term frequencies, and modularize the indexing process.
   - **Deliverables:** Submit code and a report detailing the number of documents, unique tokens, and the total size of the index.

2. **Milestone 2: Develop a Search Component**

   - **Goal:** Implement a basic search functionality.
   - **Tasks:** Handle boolean queries, sort retrieved documents using tf-idf scoring, and perform cosine similarity calculations.
   - **Deliverables:** Submit code and a report with the top 5 URLs for specified queries and a picture of the search interface in action.

3. **Milestone 3: Complete Search Engine**
   - **Goal:** Improve and finalize the search engine.
   - **Tasks:** Evaluate the search engine with a set of queries, optimize performance, and generalize heuristics.
   - **Deliverables:** Submit all programs, a README file, and a TEST file. Conduct a live demonstration for the TAs.

**Features:**

- **Indexing:** Created an inverted index considering term frequencies and tf-idf scores. Highlighted important text from HTML tags.
- **Search Interface:** Implemented a console prompt for user queries. Utilized tf-idf for ranking, with additional components for improved retrieval.
- **Extra Credit:** Added features such as duplicate page detection, PageRank, n-gram indexing, word position indexing, and a GUI for enhanced user experience.

**Tools and Technologies:**

- **Languages and Libraries:** Python, nltk, pandas, BeautifulSoup, urllib.parse, collections, unidecode, numpy, nicegui, langchain.
- **Development Environment:** Utilized GitHub for version control and collaboration.

**Challenges and Solutions:**

- **Efficient Data Structures:** Designed data structures to handle large datasets efficiently.
- **Optimized Indexing:** Implemented disk-based partial indexing to manage memory usage.
- **Responsive Search:** Achieved fast search response times under specified constraints.

**Results:**

- Successfully crawled and indexed a large collection of web pages.
- Developed a functional search engine with efficient retrieval and ranking mechanisms.
- Conducted a comprehensive evaluation and optimization of the search engine.

---

This project honed my skills in web scraping, data extraction, and search engine implementation, providing valuable experience in handling large-scale data operations and ensuring efficient and effective retrieval of information.
