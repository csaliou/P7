# P7


Backend

cd backend puis npm install puis node server.js


frontend

cd frontend puis npm install puis npm run serve


Configuration de la base de données

-- 1: Créer une nouvelle base
CREATE DATABASE groupomania; -- Remplacer "groupomania" par le nom souhaité
-- 2: 
CREATE USER 'socialadmin'@'localhost' IDENTIFIED BY 'mot_de_passe'; -- remplacer "socialadmin" et "mot_de_passe" par le login/mdp souhaité
GRANT ALL PRIVILEGES ON groupomania.* TO 'socialadmin'@'localhost';
