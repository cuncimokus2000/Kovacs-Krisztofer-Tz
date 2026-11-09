CREATE TABLE kategoriak (id int(5) AUTO_INCREMENT PRIMARY KEY, nev varchar(50));

CREATE TABLE termekek ( id int(5) AUTO_INCREMENT PRIMARY KEY,kategoria_id int(5) , nev varchar(100) , ar int(10) , keszlet int(10) , elerheto boolean);

insert INTO kategoriak (id , nev ) VALUES 
(1, 'Elektronika'), 
(2, 'Irodaszer'), 
(3, 'Háztartási gép'), 
(4, 'Kis gép'), 
(5, 'Ipari cikk'), 
(6, 'Segéd anyag');

insert INTO termekek (id, kategoria_id, nev, ar, keszlet, elerheto) VALUES
(1, 1, 'Vezeték nélküli optikai egér' , 4990 , 25 , 1 ),
(2, 1, 'Mechanikus billentyűzet' , 18500 , 10 , 1 ),
(3, 1, 'USB-C töltő kábel 2m' , 2490 , 0 , 0 ),
(4 , 2, 'Golyóstoll kék (10db-os)' , 1200 , 50 , 1 ),
(5, 2, 'A4 Másolópapír 500 lap' , 2190 , 120 , 1 ),
(6, 2, 'Füzet A5 vonalas' , 450 , 0 , 0 ),
(7, 3, 'Kenyérpirító inox' , 8990 , 8 , 1 ),
(8, 3, 'Vízforraló 1.7L' , 6490 , 15 , 1 ),
(9, 3, 'Robotporszívó smart' , 69900 , 3 , 1 ),
(10, 1, 'Gamer fejhallgató mikrofonnal' , 12990 , 0 , 0 );

 

 
//rossz
ALTER TABLE termekek  ADD CONSTRAINT kategoriak FOREIGN KEY termekek_id REFERENCES termekek(id);

1 SELECT * FROM termekek join kategoriak ON termekek.kategoria_id = kategoria_id ORDER BY termekek.ar ASC;

2

3 SELECT * FROM termekek WHERE nev LIKE '%egér%';

4

5

UPDATE termekek SET ar = 5990 WHERE id = 1;

UPDATE kategoriak SET nev = 'mikro' WHERE id = 1;

DELETE FROM termekek WHERE id = 10;

DELETE FROM kategoriak WHERE id = 6;
