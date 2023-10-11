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
        carBrand
        carType
      }
    }
  `;

  const result = await request(
    "https://api-ap-southeast-2.hygraph.com/v2/clnhqht3984ss01uj5w5q1hz6/master",
    query
  );
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query StoreLocations {
      storesLocations {
        address
      }
    }
  `;

  const result = await request(
    "https://api-ap-southeast-2.hygraph.com/v2/clnhqht3984ss01uj5w5q1hz6/master",
    query
  );
  return result;
};

export const createBooking = async (formValue) => {
  console.log(formValue);
  const mutationQuery =
    gql`
    mutation MyMutation {
      createBooking(
        data:  {userName: "` +
    formValue.userName +
    `", 
      pickUpDate: "` +
    formValue.pickUpDate +
    `", 
      pickUpTime: "` +
    formValue.pickUpTime +
    `", 
      dropOffDate: "` +
    formValue.dropOffDate +
    `", 
      dropOffTime: "` +
    formValue.dropOffTime +
    `", 
      contactNumber: "` +
    formValue.contactNumber +
    `", 
      carId: {connect: 
        {id: "` +
    formValue.carId +
    `"}}}
    ) {
      id
    }
    }
  `;
  const result = await request(
    "https://api-ap-southeast-2.hygraph.com/v2/clnhqht3984ss01uj5w5q1hz6/master",
    mutationQuery
  );
  return result;
};
