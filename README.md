# prisma_goodreads
prisma + react+ express for goodreads clone

책검색

mutation
회원가입
책등록
평점, 후기 남기기
유저별 keeplist생성

type User {
  id: ID! @id @unique
  username: String! @unique
  email: String! @unique
  firstName: String
  lastName: String
  keeplist: [Book] @relation(name: "Keepbook")
  uploadlist: [Book] @relation(name: "Uploadbook")
}

type Book {
  id: ID! @id @unique
  title: String!
  author: String!
  pubDate: String!
  priceStandard: Int
  coverSmallUrl: String
  publisher: String
  description: String
  stars: Int
  uploadby: User! @relation(name: "Uploadbook")
  gotreview: [Review] @relation(name: "Getreview"))
  keepuser: [User] @relation(name: "Keepbook")
}

type Review {
  id: ID! @id @unique
  score: Int
  context: String
  writtenby: User! @relation(name: "Getreview"))
}

