from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Category, Writer, Book, BookImage


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        password = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category()
        category.name = validated_data.get('name')
        category.save()
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class WriterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        writer = Writer()
        writer.name = validated_data.get('name')
        writer.save()
        return writer

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class BookImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookImage
        fields = ('id', 'src')


class BookSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    author = WriterSerializer()

    # image = BookImageSerializer()

    class Meta:
        model = Book
        fields = '__all__'
