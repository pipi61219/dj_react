from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    description = models.CharField(max_length=200)

    def _str_(self):
        return self.title

