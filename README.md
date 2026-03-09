# SOUND – Music & Video Website 🎵🎬

**Developed By:** Riznish, Mohiz, Kainat, Bushra  
**Course:** DISM | **Center:** Aptech Gulshan E Hadeed  

SOUND is a **dynamic PHP & MySQL web application** for managing and streaming music and video content. Users can browse, search, rate, and review content, while admins manage everything through a secure dashboard.  

---

## 🔹 Features

- User registration & secure login  
- Browse music/videos by artist, album, year, genre, language  
- Admin Panel for content & user management  
- Add, update, delete music/videos & categories  
- Ratings & reviews system  
- Upload album art & media files  
- Display latest & top content on the homepage  
- Responsive dark-themed UI  
- SweetAlert2 notifications for success/error  

---

## 🔹 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, PHP  
- **Backend:** PHP (CRUD, Sessions, Authentication)  
- **Database:** MySQL  

---

## 🔹 Database Structure

**Database Name:** `sound_db`  

| Table      | Purpose |
|------------|---------|
| `register` | Admin & user accounts |
| `usr`      | Store user details |
| `audio`    | Music metadata & file paths |
| `video`    | Video metadata & file paths |
| `category` | Media classification |
| `ratings`  | Store user ratings |
| `reviews`  | Store user reviews |
| `contact`  | Store contact form messages |

**Relationships:** Users can rate & review multiple items; admin manages all content & categories.

---

## 🔹 Modules & Functionality

**User:**  
- Register / Login / Browse / Search  
- Rate & review music/videos  
- Update personal profile  

**Admin:**  
- Manage users, music, videos, categories  
- View contact messages  
- Upload media files  
- Delete or modify records  

**Core Files & Logic:**  
- `connect.php` → Database connection  
- `session_start()` → Session handling  
- `deleted.php` / `delet.php` → Delete users & videos  
- CRUD modules follow **Single Responsibility Principle**  
- HTML + PHP = server-side rendering (SSR)  

---

## 🔹 File Uploads

- Music → `../upload/`  
- Video → `../upload/`  
- Images → `../upload/`  
- File paths stored in DB for preview & retrieval  

---

## 🔹 Installation & Setup

1. Clone this repo:  
```bash
git clone <your-repo-link>
