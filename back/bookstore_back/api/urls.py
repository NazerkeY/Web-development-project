from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.views import categories_list, get_category, writers_list, get_writer, CategoryBooksAPIView,\
                      BookDetailAPIView, BooksListAPIView, ImageListAPIView, ImageDetailAPIView, UserViewSet
from rest_framework_jwt.views import obtain_jwt_token

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories/', categories_list),
    path('categories/<int:category_id>', get_category),
    path('categories/<int:category_id>/books', CategoryBooksAPIView.as_view()),
    path('writers/', writers_list),
    path('writer/<int:writer_id>', get_writer),
    path('books', BooksListAPIView.as_view()),
    path('books/<int:book_id>', BookDetailAPIView.as_view()),
    path('images', ImageListAPIView.as_view()),
    path('images/<int:image_id>', ImageDetailAPIView.as_view()),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
