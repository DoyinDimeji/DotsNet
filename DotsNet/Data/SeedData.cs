using DotsNet.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotsNet.Data
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<DotsNetDbContext>();
            context.Database.EnsureCreated();
            //Look for any movies
            if (context.Posts.Any())
            {
                return; //DB has been seeded
            }

            var tags = new Tag[]
            {
                new Tag
                {
                    Title = "Xamarin", TagID = "Xama"
                },
                new Tag
                {
                    Title = "Shorts", TagID = "Shts"
                },
                new Tag
                {
                    Title = "Asp.Net Core", TagID = "AsNeCo"
                },
                new Tag
                {
                    Title = "Entrepreneurship", TagID = "Entre"
                },
                new Tag
                {
                    Title = "Microsoft", TagID = "MSFT"
                },
            };
            foreach (var tag in tags)
            {
                context.Tags.Add(tag);
            }
            context.SaveChanges();
            //using (var transaction = context.Database.BeginTransaction())
            //{
            //    foreach (var tag in tags)
            //    {
            //        context.Tags.Add(tag);
            //    }
            //    context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.Tags ON;");
            //    context.SaveChanges();
            //    context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.Tags OFF;");
            //    transaction.Commit();
            //}

            var posts = new Post[]
            {
                new Post
                {
                    Body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis euismod augue, et varius odio. Duis tincidunt ipsum eu justo luctus accumsan eget et nisi. Suspendisse ex erat, tempor nec lectus et, aliquam porta velit. Suspendisse semper magna sed quam cursus, ac viverra ipsum nibus. Pellentesque cursus est quis congue cursus. Aenean rutrum diam ut erat tempor, non hendrerit massa egestas. Maecenas consectetur augue felis, nec scelerisque lorem auctor eu. Ut ut bibendum justo, nec laoreet mi. Proin tristique non nibh id scelerisque. Mauris varius lobortis orci. Suspendisse non convallis est. Suspendisse dapibus sapien at quam suscipit, non ornare libero fermentum. Fusce elementum lacinia libero eget auctor. Quisque ornare tempus mauris, at tempor erat porta nec. Suspendisse venenatis dui vitae purus congue vulputate. Nam pharetra lorem sit amet tellus rutrum, eu auctor mi mollis. Maecenas commodo lorem sit amet neque viverra, quis rhoncus enim elementum. Aliquam neque neque, convallis vitae consectetur sed, volutpat sit amet tellus. Aliquam quis placerat dui. Maecenas vestibulum vel metus nec sodales. Integer ecitur purus nunc, non blandit elit ultricies ut.Donec sit amet elementum odio. Proin cursus massa leo, at congue tortor mattis ut. Aenean pulvinar placerat sapien, id tempus leo pretium vel. Cras venenatis sollicitudin vehicula. Sed placerat quis nisl id rutrum. Ut euismod mi ut tellus bibendum, a pharetra orci pulvinar. Vivamus eget consequat nisi, at placerat odio. Nulla auctor dictum ligula porta maximus. Integer a orci viverra mauris posuere convallis eu sit amet metus. Aenean ac ante urna. Proin elementum, nibh sit amet facilisis vehicula, erat risus laoreet mi, sit amet egestas elit odio at felis. Etiam molestie nunc mauris, vitae dictum dui porttitor sit amet. Donec enim tortor, fringilla in enim eu, facilisis congue diam. Nam sed aliquam diam. Nulla facilisi.", Title="The Things of Null", PostID="TToN", PostDate=new DateTime(2018,1,28)
                },
                new Post
                {
                    Body="Maecenas commodo lorem sit amet neque viverra, quis rhoncus enim elementum. Aliquam neque neque, convallis vitae consectetur sed, volutpat sit amet tellus. Sed scelerisque mi dapibus elit pretium, eu tempus nisl convallis. Curabitur a iaculis enim, vel ultrices leo. Duis in lorem magna. Sed consequat interdum elementum. Aliquam lobortis est et elit lobortis auctor. Ut augue diam, vehicula eu metus et, sollicitudin cursus augue. Aliquam euismod, libero vel fermentum ornare, justo erat suscipit orci, sed tristique est mauris a mauris. Duis eu egestas est. Aliquam sed purus ligula. Aenean non dui vitae tortor condimentum pretium ac nec dolor. Mauris a semper risus. Sed pulvinar venenatis mi quis rhoncus. Sed pretium mi consequat tortor nibus blandit. Curabitur sed blandit tellus, vitae aliquet nisl. Nullam a erat dapibus, euismod libero at, condimentum arcu. Aliquam bibendum mi ac eleifend tincidunt. Vivamus urna risus, varius sit amet erat at, varius commodo dui. Donec porttitor urna malesuada nulla eleifend, eu blandit metus dignissim. Aliquam erat volutpat. Nulla iaculis consectetur euismod. Donec condimentum fringilla nibh, at convallis odio volutpat vitae. Ut accumsan cursus molestie. Mauris ac neque posuere, scelerisque sem auctor, laoreet neque. Donec nibus orci velit, ut cursus lectus consectetur eget. Phasellus dapibus dapibus leo a feugiat. Nulla venenatis porta posuere. Duis porttitor semper odio, id laoreet sapien aliquet sed. Sed placerat commodo ecitur. Duis fermentum, felis ac sodales volutpat, erat quam egestas sapien, non consequat lectus elit egestas lectus. Nunc fermentum bibendum vulputate.", Title="Null and Void", PostID="NaV", PostDate=new DateTime(2018,6,13)
                },
                new Post
                {
                    Body="Sed scelerisque mi dapibus elit pretium, eu tempus nisl convallis. Curabitur a iaculis enim, vel ultrices leo. Duis in lorem magna. Sed consequat interdum elementum. Aliquam lobortis est et elit lobortis auctor. Ut augue diam, vehicula eu metus et, sollicitudin cursus augue. Aliquam euismod, libero vel fermentum ornare, justo erat suscipit orci, sed tristique est mauris a mauris. Duis eu egestas est. Aliquam sed purus ligula. Aenean non dui vitae tortor condimentum pretium ac nec dolor. Mauris a semper risus. Sed pulvinar venenatis mi quis rhoncus. Sed pretium mi consequat tortor nibus blandit. Curabitur sed blandit tellus, vitae aliquet nisl. Nullam a erat dapibus, euismod libero at, condimentum arcu. Aliquam bibendum mi ac eleifend tincidunt. Aliquam quis placerat dui. Maecenas vestibulum vel metus nec sodales. Integer ecitur purus nunc, non blandit elit ultricies ut.Donec sit amet elementum odio. Proin cursus massa leo, at congue tortor mattis ut. Aenean pulvinar placerat sapien, id tempus leo pretium vel. Cras venenatis sollicitudin vehicula. Sed placerat quis nisl id rutrum. Ut euismod mi ut tellus bibendum, a pharetra orci pulvinar. Vivamus eget consequat nisi, at placerat odio. Nulla auctor dictum ligula porta maximus. Integer a orci viverra mauris posuere convallis eu sit amet metus. Aenean ac ante urna. Proin elementum, nibh sit amet facilisis vehicula, erat risus laoreet mi, sit amet egestas elit odio at felis. Etiam molestie nunc mauris, vitae dictum dui porttitor sit amet. Donec enim tortor, fringilla in enim eu, facilisis congue diam. Nam sed aliquam diam. Nulla facilisi.", Title="Null-ito", PostID="Nito", PostDate=new DateTime(2018,2,03)
                },
                new Post
                {
                    Body="Suspendisse ex erat, tempor nec lectus et, aliquam porta velit. Suspendisse semper magna sed quam cursus, ac viverra ipsum nibus. Pellentesque cursus est quis congue cursus. Aenean rutrum diam ut erat tempor, non hendrerit massa egestas. Maecenas consectetur augue felis, nec scelerisque lorem auctor eu. Ut ut bibendum justo, nec laoreet mi. Proin tristique non nibh id scelerisque. Mauris varius lobortis orci. Suspendisse non convallis est. Suspendisse dapibus sapien at quam suscipit, non ornare libero fermentum. Fusce elementum lacinia libero eget auctor. Quisque ornare tempus mauris, at tempor erat porta nec. Suspendisse venenatis dui vitae purus congue vulputate. Nam pharetra lorem sit amet tellus rutrum, eu auctor mi mollis. Maecenas commodo lorem sit amet neque viverra, quis rhoncus enim elementum. Aliquam neque neque, convallis vitae consectetur sed, volutpat sit amet tellus. Sed scelerisque mi dapibus elit pretium, eu tempus nisl convallis. Curabitur a iaculis enim, vel ultrices leo. Duis in lorem magna. Sed consequat interdum elementum. Aliquam lobortis est et elit lobortis auctor. Ut augue diam, vehicula eu metus et, sollicitudin cursus augue. Aliquam euismod, libero vel fermentum ornare, justo erat suscipit orci, sed tristique est mauris a mauris. Duis eu egestas est. Aliquam sed purus ligula. Aenean non dui vitae tortor condimentum pretium ac nec dolor. Mauris a semper risus. Sed pulvinar venenatis mi quis rhoncus. Sed pretium mi consequat tortor nibus blandit. Curabitur sed blandit tellus, vitae aliquet nisl. Nullam a erat dapibus, euismod libero at, condimentum arcu. Aliquam bibendum mi ac eleifend tincidunt.", Title="Grand Null", PostID="GraNul", PostDate=new DateTime(2018,1,15)
                },
                new Post
                {
                    Body="Suspendisse venenatis dui vitae purus congue vulputate. Nam pharetra lorem sit amet tellus rutrum, eu auctor mi mollis. Maecenas commodo lorem sit amet neque viverra, quis rhoncus enim elementum. Aliquam neque neque, convallis vitae consectetur sed, volutpat sit amet tellus. Sed scelerisque mi dapibus elit pretium, eu tempus nisl convallis. Curabitur a iaculis enim, vel ultrices leo. Duis in lorem magna. Sed consequat interdum elementum. Aliquam lobortis est et elit lobortis auctor. Ut augue diam, vehicula eu metus et, sollicitudin cursus augue. Aliquam euismod, libero vel fermentum ornare, justo erat suscipit orci, sed tristique est mauris a mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis euismod augue, et varius odio. Duis tincidunt ipsum eu justo luctus accumsan eget et nisi. Suspendisse ex erat, tempor nec lectus et, aliquam porta velit. Suspendisse semper magna sed quam cursus, ac viverra ipsum nibus. Pellentesque cursus est quis congue cursus. Aenean rutrum diam ut erat tempor, non hendrerit massa egestas. Maecenas consectetur augue felis, nec scelerisque lorem auctor eu. Ut ut bibendum justo, nec laoreet mi. Proin tristique non nibh id scelerisque. Mauris varius lobortis orci. Suspendisse non convallis est. Suspendisse dapibus sapien at quam suscipit, non ornare libero fermentum. Fusce elementum lacinia libero eget auctor. Quisque ornare tempus mauris, at tempor erat porta nec. Maecenas commodo lorem sit amet neque viverra, quis rhoncus enim elementum. Aliquam neque neque, convallis vitae consectetur sed, volutpat sit amet tellus. Aliquam quis placerat dui. Maecenas vestibulum vel metus nec sodales. Integer ecitur purus nunc, non blandit elit ultricies ut.Donec sit amet elementum odio. Proin cursus massa leo, at congue tortor mattis ut. Aenean pulvinar placerat sapien, id tempus leo pretium vel. Cras venenatis sollicitudin vehicula. Sed placerat quis nisl id rutrum. Ut euismod mi ut tellus bibendum, a pharetra orci pulvinar. Vivamus eget consequat nisi, at placerat odio. Nulla auctor dictum ligula porta maximus. Integer a orci viverra mauris posuere convallis eu sit amet metus. Aenean ac ante urna. Proin elementum, nibh sit amet facilisis vehicula, erat risus laoreet mi, sit amet egestas elit odio at felis. Etiam molestie nunc mauris, vitae dictum dui porttitor sit amet. Donec enim tortor, fringilla in enim eu, facilisis congue diam. Nam sed aliquam diam. Nulla facilisi.", Title="The Furios Tale of The Nullable Beast", PostID="TFToTNB", PostDate=new DateTime(2018,3,19)
                },
            };
            foreach (var post in posts)
            {
                context.Posts.Add(post);
            }
            context.SaveChanges();
            //using (var transaction = context.Database.BeginTransaction())
            //{
            //    foreach (var post in posts)
            //    {
            //        context.Posts.Add(post);
            //    }
            //    context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.Posts ON;");
            //    context.SaveChanges();
            //    context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.Posts OFF;");
            //    transaction.Commit();
            //}

            var postTags = new PostTag[]
            {
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "The Furios Tale of The Nullable Beast").PostID,
                    TagID = tags.Single(t => t.Title == "Xamarin").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "Grand Null").PostID,
                    TagID = tags.Single(t => t.Title == "Xamarin").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "Null and Void").PostID,
                    TagID = tags.Single(t => t.Title == "Asp.Net Core").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "Null-ito").PostID,
                    TagID = tags.Single(t => t.Title == "Shorts").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "The Things of Null").PostID,
                    TagID = tags.Single(t => t.Title == "Microsoft").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "The Furios Tale of The Nullable Beast").PostID,
                    TagID = tags.Single(t => t.Title == "Entrepreneurship").TagID
                },new PostTag
                {
                    PostID = posts.Single(p => p.Title == "Null and Void").PostID,
                    TagID = tags.Single(t => t.Title == "Microsoft").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "The Things of Null").PostID,
                    TagID = tags.Single(t => t.Title == "Shorts").TagID
                },
                new PostTag
                {
                    PostID = posts.Single(p => p.Title == "Null-ito").PostID,
                    TagID = tags.Single(t => t.Title == "Entrepreneurhsip").TagID
                },
            };
            using (var transaction = context.Database.BeginTransaction())
            {
                foreach (var pt in postTags)
                {
                    var ptInDatabase = context.PostTags.Where(
                        p => p.Post.PostID == pt.PostID &&
                             p.Tag.TagID == pt.TagID
                        );
                    if (ptInDatabase == null)
                    {
                        context.PostTags.Add(pt);
                    }
                }
                context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.PostTags ON;");
                context.SaveChanges();
                context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.PostTags OFF;");
                transaction.Commit();
            }
        }
    }
}
