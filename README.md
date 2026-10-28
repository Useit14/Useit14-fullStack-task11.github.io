# Задание 11 — AMP-версия Fudi

AMP-версия шаблона из контрольного задания 4 + сравнение с обычной версией через PageSpeed Insights.

## Структура

```
task11/
├── index.html       # меню и сравнительная таблица
├── original/        # обычная адаптивная страница
├── amp/             # AMP-версия
└── src/styles/      # стили меню
```

## Как сранивалось

1. Тест двух страниц на https://pagespeed.web.dev/

## Что сделано в AMP

- `html ⚡`, обязательный runtime и boilerplate
- все картинки через `<amp-img>` с width/height/layout
- слайдер отзывов — `<amp-carousel type="slides">`
- мобильное меню — `<amp-sidebar>`
- стили только в `<style amp-custom>`
- без пользовательского JS
