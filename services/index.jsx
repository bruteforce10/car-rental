import request, { gql } from "graphql-request";

export const getCarList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        carType
        publishedAt
        updatedAt
        seat
        image {
          url
        }
      }
    }
  `;

  const result = await request(
    "https://api-ap-southeast-2.hygraph.com/v2/clnhqht3984ss01uj5w5q1hz6/master",
    query
  );
  return result;
};
