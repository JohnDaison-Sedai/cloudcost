INSERT INTO region (id, name, multiplier) VALUES (1, 'us-east-1', 1.00);
INSERT INTO region (id, name, multiplier) VALUES (2, 'us-east-2', 1.05);
INSERT INTO region (id, name, multiplier) VALUES (3, 'us-west-1', 1.15);
INSERT INTO region (id, name, multiplier) VALUES (4, 'us-west-2', 1.12);
INSERT INTO region (id, name, multiplier) VALUES (5, 'af-south-1', 1.25);
INSERT INTO region (id, name, multiplier) VALUES (6, 'ap-east-1', 1.22);
INSERT INTO region (id, name, multiplier) VALUES (7, 'ap-south-1', 0.95);
INSERT INTO region (id, name, multiplier) VALUES (8, 'ap-northeast-1', 1.18);
INSERT INTO region (id, name, multiplier) VALUES (9, 'ap-northeast-2', 1.20);
INSERT INTO region (id, name, multiplier) VALUES (10, 'ap-northeast-3', 1.10);
INSERT INTO region (id, name, multiplier) VALUES (11, 'ap-southeast-1', 1.13);
INSERT INTO region (id, name, multiplier) VALUES (12, 'ap-southeast-2', 1.14);
INSERT INTO region (id, name, multiplier) VALUES (13, 'ca-central-1', 1.06);
INSERT INTO region (id, name, multiplier) VALUES (14, 'eu-central-1', 1.08);
INSERT INTO region (id, name, multiplier) VALUES (15, 'eu-west-1', 1.04);
INSERT INTO region (id, name, multiplier) VALUES (16, 'eu-west-2', 1.11);
INSERT INTO region (id, name, multiplier) VALUES (17, 'eu-west-3', 1.16);
INSERT INTO region (id, name, multiplier) VALUES (18, 'eu-north-1', 1.07);
INSERT INTO region (id, name, multiplier) VALUES (19, 'me-south-1', 1.23);
INSERT INTO region (id, name, multiplier) VALUES (20, 'sa-east-1', 1.09);


INSERT INTO resource_type (id, name, base_price) VALUES (1, 'Compute', 100);
INSERT INTO resource_type (id, name, base_price) VALUES (2, 'Storage', 50);
INSERT INTO resource_type (id, name, base_price) VALUES (3, 'Database', 70);
INSERT INTO resource_type (id, name, base_price) VALUES (4, 'Networking', 40);
INSERT INTO resource_type (id, name, base_price) VALUES (5, 'Security and Identity', 80);
INSERT INTO resource_type (id, name, base_price) VALUES (6, 'AI/ML', 120);


-- Full mapping: 20 regions × 6 resource types
INSERT INTO region_resource (region_id, resource_type_id, count) VALUES
(1, 1, 5), (1, 2, 10), (1, 3, 3), (1, 4, 8), (1, 5, 6), (1, 6, 2),
(2, 1, 4), (2, 2, 9), (2, 3, 0), (2, 4, 7), (2, 5, 3), (2, 6, 1),
(3, 1, 0), (3, 2, 12), (3, 3, 4), (3, 4, 6), (3, 5, 5), (3, 6, 3),
(4, 1, 8), (4, 2, 11), (4, 3, 7), (4, 4, 4), (4, 5, 0), (4, 6, 2),
(5, 1, 0), (5, 2, 0), (5, 3, 5), (5, 4, 6), (5, 5, 3), (5, 6, 2),
(6, 1, 3), (6, 2, 5), (6, 3, 0), (6, 4, 4), (6, 5, 7), (6, 6, 2),
(7, 1, 6), (7, 2, 3), (7, 3, 8), (7, 4, 0), (7, 5, 2), (7, 6, 1),
(8, 1, 2), (8, 2, 7), (8, 3, 1), (8, 4, 6), (8, 5, 4), (8, 6, 0),
(9, 1, 4), (9, 2, 6), (9, 3, 0), (9, 4, 5), (9, 5, 0), (9, 6, 3),
(10, 1, 0), (10, 2, 5), (10, 3, 2), (10, 4, 4), (10, 5, 6), (10, 6, 0),
(11, 1, 5), (11, 2, 4), (11, 3, 6), (11, 4, 3), (11, 5, 0), (11, 6, 1),
(12, 1, 8), (12, 2, 7), (12, 3, 0), (12, 4, 2), (12, 5, 3), (12, 6, 2),
(13, 1, 0), (13, 2, 0), (13, 3, 7), (13, 4, 6), (13, 5, 4), (13, 6, 2),
(14, 1, 9), (14, 2, 4), (14, 3, 3), (14, 4, 5), (14, 5, 2), (14, 6, 1),
(15, 1, 2), (15, 2, 6), (15, 3, 5), (15, 4, 4), (15, 5, 1), (15, 6, 0),
(16, 1, 0), (16, 2, 7), (16, 3, 3), (16, 4, 0), (16, 5, 5), (16, 6, 4),
(17, 1, 3), (17, 2, 8), (17, 3, 4), (17, 4, 2), (17, 5, 1), (17, 6, 0),
(18, 1, 6), (18, 2, 4), (18, 3, 0), (18, 4, 3), (18, 5, 7), (18, 6, 2),
(19, 1, 0), (19, 2, 5), (19, 3, 2), (19, 4, 4), (19, 5, 0), (19, 6, 1),
(20, 1, 7), (20, 2, 3), (20, 3, 1), (20, 4, 5), (20, 5, 2), (20, 6, 0);
