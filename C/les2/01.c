#include <stdio.h>

int get_max_num(int a, int b)
{
	if (a > b)
	{
		return a;
	} else {
		return b;
	}
}

int main()
{
	int a = 2;
	int b = 4;
	int num = get_max_num(a, b);
	printf("最大的数字是 %d\n", num);
	return 0;
}

