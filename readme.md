# Демо - использование объединения типов для контроля единиц измерения

Система умного дома получает сигнал, что хозяин возвращается с работы, уточняет у него какую температуру кофе ему подготовить. Все бы ничего, но если хозяин уехал в отпуск по обмену в Калифорнию, а в его дом приезжает гость из США, то поддерживать температуру воды 200 градусов не реально. Упс! и умный дом погорел.

## Используем адаптер

Мы можем использовать адаптер для преобразования температуры, выраженной шкале Фаренгейта, в значения по шкале Цельсия.

## Проблема осталась

Мы научились слушать гостя и потенциально можем преобразовать значение из одной шкалы в другую, но проблема осталась. Если мы в программе где-то имеем число `42` - это сорок два цельсия или фаренгейта?

## Вносим ясность в интерфейсы

Панель управления работает в международной системе СИ, а адаптер позволяет преобразовать значение из имперской системы счисления в нормальную
