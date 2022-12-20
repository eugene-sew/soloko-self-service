import axios from "axios";
import { categories } from "../components/data";
import { useAuth } from "../context/auth";

// get all meals , applies to staff and customers
export async function getMeals() {
  const response = await fetch(import.meta.env.VITE_APP_FETCH_MEALS);
  if (!response.ok) {
    throw { message: "could not fetch meals", status: 500 };
  }
  return response.json();
}

// get a particular meal, applies to staff only
export async function getMeal(id) {
  const response = await fetch(`${import.meta.env.VITE_APP_FETCH_MEALS}/${id}`);
  if (!response.ok) {
    throw { message: "could not fetch meal", status: 500 };
  }
  return response.json();
}

// create order, applies to customers only but accessible by admin/staff
export async function createOrder({ data }) {
  const response = await fetch(import.meta.env.VITE_APP_MAKE_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw { message: "could not pst order" };
  }
  return response.json();
}

// get a specific order by id , applies to staff only
// requires authentication
export async function getOrder(id) {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const url = `${
    import.meta.env.VITE_APP_ORDER
  }${id}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal&populate[3]=order_items.meal.image`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status != 200) {
    throw { message: response.error };
  }

  return response.data;
}

// get all Orders in system
// requires authentication
export async function getOrders() {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const url = import.meta.env.VITE_APP_GET_ORDERS;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status != 200) {
    throw { message: response.error };
  }

  return response.data;
}

export async function getCategories() {
  const response = await fetch(import.meta.env.VITE_APP_GET_CATEGORIES);
  if (!response.ok) {
    throw { message: "could not fetch categories", status: 500 };
  }
  return response.json();
}

export async function getCategoryBasedMeals(id) {
  const response = await fetch(
    `${
      import.meta.env.VITE_APP_GET_CATEGORIES
    }/${id}/?populate[0]=attributes&populate[1]=meals&populate[2]=meals.image`
  );
  if (!response.ok) {
    throw { message: "could not fetch categories", status: 500 };
  }
  return response.json();
}

export async function getCategoryBasedMenu(link) {
  const category = categories.find((item) => link === item.link);
  const id = category.id;
  // console.log(id);
  const response = await fetch(
    `${
      import.meta.env.VITE_APP_GET_CATEGORIES
    }/${id}/?populate[0]=attributes&populate[1]=meals&populate[2]=meals.image`
  );
  if (!response.ok) {
    throw { message: "could not fetch categories", status: 500 };
  }
  return response.json();
}

export async function deleteMeal(id) {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const response = await axios.delete(
    `${import.meta.env.VITE_APP_MEALS}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status !== 200) {
    throw { message: "could not fetch categories", status: 500 };
  }

  return response;
}

export async function updateMeal(id, data) {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const response = await axios.put(`${import.meta.env.VITE_APP_MEALS}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  });
  if (response.status !== 200) {
    throw { message: "could not fetch categories", status: 500 };
  }

  return response;
}
