# Django

### Rest Framework - ViewSet CUD

I really enjoy using the Django Rest Framework for APIs, but the docs only really give examples for list and retrieve methods. For beginners it may be hard to find example of how the other routes function. I know I struggled with this when I started out. I like using Viewsets, so for list and retrieve look at the [ViewSet Docs Example](https://www.django-rest-framework.org/api-guide/viewsets/#example).

```python
class MyViewset(viewsets.ViewSet):
    ...
    def create(self, req):
        serializer = SomeSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, req, pk):
        instance = MyTable.objects.filter(user=pk).first()
        serializer = SomeSerializer(instance, data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data":"UPDATE MyTable"}, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, req, pk):
        # get the users table
        user_tree = MyTable.objects.filter(user=req.user)
        user_tree.delete()
        return Response(data={"DROP TABLE MyTable"}, status=status.HTTP_204_NO_CONTENT)
```
