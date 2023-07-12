CS411 Project Proposal - RateMyRSOs<br />
Matt Straczek, Peyton Murray, Qi Yu, Hao Qi<br />
February 2, 2023 <br />
1. Project Summary<br />
This project intends to build a review website, RateMyRSOs, that allows students at UIUC to post reviews and
ratings to UIUC’s Registered Student Organizations (RSOs). RateMyRSOs would resemble the functionalities
of RateMyProfessors, a popular website for professor and college ratings, but focused on sharing the reviews
and ratings for RSOs at UIUC instead.<br />
2. Description of Application<br />
This projects aims to solve a lack of review information related to RSOs at UIUC. Nowadays, students at
UIUC usually resort to various different online platforms such as Discord and Reddit to collect fragmented
reviews about different RSOs. However, this procedure can be time-consuming and the information collected
can be irrelevant and sometimes inaccruate.<br />
The application of RateMyRSOs would be to solve such issues and provide students at UIUC a more comperhensive review websites for their reference, which can help students make more educated decisions about
joining a particular RSO.<br />
3. Usefulness of Application<br />
Most of college students are passionate about joining RSOs upon entering university. However, many of them
have little prior information about different RSOs. According to our knowledge, there are currently no similar
websites that provide a centralized source for students’ experiences with RSOs. For students who want to get
relevant information, the closest options exist are simply joining, asking friends, or asking on Discord or Reddit.
The goal of RateMyRSOs is to provide a centralized platform sharing comprehensive information, including
students’ ratings and reviews, about different RSOs at UIUC. Not only can RateMyRSOs help students get
a more comprehensive pictures before joining any RSOs, the websites can also help officers to decide how to
improve their RSOs for better popularity.<br />
4. Realness of Application<br />
In general, there would be three types of databases at the back-end of RateMyRSOs, a database of RSOs
and their information, a database of Reviews associated with each RSO (User that submitted the review, the
review itself, date posted, number of likes), and a database of Users that are associated with the reviews that
they post.<br />
For RSOs data, we can use the RSOs information from UIUC’s official website of RSOs. We plan to file a
request to ISSS department for the relevant data and we have a backup plan by using a web crawler to get all
the publicly available data. For User data, we can use arbitrary data that is either auto generated or pulled from
auto generated data sets online. For Review data, we can also make use of auto generated data, or irrelevant
data from online datasets (i.e. McDonald’s reviews, Yelp reviews, etc.)<br />

5. Functionality of Application<br />
We separate people visiting RateMyRSOs into two categories: visitor and user. Visitors do not have an
account and can only do search and review operations. For search operations, visitors can directly search for
RSOs that they are considering in the search bar, to learn more about the experiences others have with the
organization. Alternatively, they could also apply filters (i.e. Type of RSO, Rank by rating, etc.) across all
RSOs to find the ones that are interesting to them. For review functions, upon opening the page of a specific
RSO, visitors can see the basic information, the overall rating, the distribution of ratings, as well as the reviews
for this RSO. Visitors can also choose to sort the reviews by date, rating, or likes in ascending(descending)
order.<br />
Once registered on the website, a visitors becomes a user. We further divided users into two kinds: students
and administers. Both kinds of users can do the same search & review operations as visitors. For students, they
can also rate RSOs they have joined and share about their experiences. Students can write reviews about the
RSOs they once joined, and can also update and delete reviews they wrote before. Administers are designed to
maintain the RSO and Review databases. They can insert, update and delete basic information about RSOs,
and can also delete any reviews posted on the website.<br />
In addition to these basic functions, we also want to add some creative components to improve the functionality
of our application. We plan to add a ”Trending RSOs” section to the homepage to show the RSOs that have
recently received most reviews. We also plan to add a ”RSOs’ Ranking” section to show the most popular and
well-acclaimed RSOs
