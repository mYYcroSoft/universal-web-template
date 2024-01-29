
DELIMITER //
DROP PROCEDURE IF EXISTS `test`//

CREATE PROCEDURE test()
begin
    select * from blog;
end  // 