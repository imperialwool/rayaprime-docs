---
title: Кастомная команда
description: Создание кастомных команд
tags: [кастомные, кастомки, свои, административная, административные, амино, amino, команда, команды]
---

# Кастомная команда

![](https://img.shields.io/badge/тип_команды-административная-red?style=for-the-badge)

## Вызов команды

```text
/кк [команда]
[ответ]
```

Алиасы: `/кастомнаякоманда` | `/новаякастомнаякоманда` | `/новаякк` | `/нкк`

Для создания кастомной команды нужно указать команду (без `/`) и писать ответ для команды на следующей строке. В ответе может быть несколько строк.

Если создать кастомную команду, которая уже существует в сообществе, ответ к команде перезапишется на новый.

В ответе могут быть переменные:
- `<author>` - тот, кто вызвал команду
- `<reply>` - автор сообщения, на чьё сообщение ответили с командой
- `<chance>` - шанс от 0 до 100
- `<d2>-<d20>` - результат кубика d2-d20 соответственно (т.е. кубики d2, d3, d4, ..., d20)

Если в качестве команды указать `список` | `лист` | `все`, то можно увидеть все кастомные команды в сообществе (но не ответ).

Если вместо ответа для кастомной команды написать `удалить` | `уничтожить` | `истребить`, то кастомная команда удалится.

## Зачем нужна

Данная команда нужна для создания кастомных (своих) команд. Помогает разнообразить команд и сделать что-то своё. 

Пользоваться могут все участники сообщества, где создана команда. Управлять ими может только администрация сообщества.
