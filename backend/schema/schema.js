import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

// user type- user id, full name, username
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { GraphQLString },
  }),
});

// diary type - date, diary entry
const DiaryType = new GraphQLObjectType({
  name: "Diary",
  fields: () => ({
    date: { GraphQLString },
    day: { GraphQLString },
    entry: { GraphQLString },
  }),
});
