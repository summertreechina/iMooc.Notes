# this is make file 它可以按照依赖关系自动编译文件
# 怎样执行 在Makefile所在目录运行 make 命令即可
# 示例，不能成功执行，因为缺少相应文件
hello.out:max.o min.o hello.c
      gcc max.o min.o hello.c
max.o:max.c
      gcc -c max.c
min.o:min.c
      gcc -c min.c