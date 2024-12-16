# Generated by Django 5.1.4 on 2024-12-16 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='myapp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('phone', models.IntegerField(null=True)),
                ('joined_date', models.DateField(null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Member',
        ),
    ]
