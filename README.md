# Assignment ACAI - Item Sharing App

A minimal React app for sharing resources like kitchen items, workout equipment, etc., among neighbors.

---

## 🚀 Live Demo

🔗 [https://assignement-acai.vercel.app/](https://assignement-acai.vercel.app/)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/FerazAhmad1/AssignementACAI.git
cd AssignementACAI
```

### 2. Install the Dependecy

npm install

### 3. Start the Development Server

npm start

### 4. Tech Stack

Reactjs,React Router
Taiwind CSS

## Feature and Summary

- **Home Page:** Displays a list of all shared items.
- **Owner Controls:** If the current user is the owner of an item, they can mark it as Sold via a checkbox.
- Once marked sold, the item status changes to "Not Available" and turns red.
- **Sorting:** Users can sort items by Name, Category, or Owner.
- **Details Page:** Click "View Details" to see full item info.
- **Add Item Page:** Users can add new items with image, name, category, and owner.
- **404 Page:** Navigating to an invalid route redirects to a clean 404 page.
- **Data Persitent:** Data Persistin in local storage

## Bonus Task

- **Mapview page:** Displays a google map with marker for all available data.
- **Mapview Filter:** we can filter on the basis of availability,and different category.On clicking marker a pop is open which can lead you to item details page.and once you click back you will back to map.

### Known Issues / Limitations

🔄 Search & Sort Not Sticky: When items overflow the screen, the search and sort bar scrolls out of view.

📃 No Pagination: All items are loaded at once.

🔐 No Authentication: There are no login or signup flows; hence, no protected routes.

👤 Hardcoded Owner: The default owner is hardcoded as "Alice Johnson", who owns the first item.
