INSERT INTO `sounds` (`id`,`sound_name`, `sound_file`, `environment_id`) 
VALUES (DEFAULT,'Street', 'street.mp3', 1),
(DEFAULT,'Floor', 'floor.mp3', 2),
(DEFAULT,'Door', 'door,mp3', 3),
(DEFAULT,'Window', 'window.mp3', 4),
(DEFAULT,'Crime Scene', 'crime.mp3', 5),
(DEFAULT,'Subway', 'subway.mp3', 6),
(DEFAULT,'Arrest', 'arrest.mp3', NULL),
(DEFAULT,'Tip', 'tip.mp3', NULL),
(DEFAULT,'Raspberry', 'raspberry.mp3', NULL),
(DEFAULT,'Escape', 'escape.mp3', NULL);

INSERT INTO `environments` (`id`,`env_name`) 
VALUES (DEFAULT,'Street'),
(DEFAULT,'Floor'),
(DEFAULT,'Door'),
(DEFAULT,'Window'),
(DEFAULT,'Crime Scene'),
(DEFAULT,'Subway'),
(DEFAULT,'Negative'),
(DEFAULT,'Start');

INSERT INTO `buildings` (`id`,`building_name`) 
VALUES (DEFAULT,'Furs'),
(DEFAULT,'Jewelry'),
(DEFAULT,'Antiques'),
(DEFAULT,'Bank'),(DEFAULT,'Newsstand'),
(DEFAULT,'Acme Detective Agency');