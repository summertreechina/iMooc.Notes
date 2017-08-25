#include <stdio.h>

void change(int a, int b)
{
	int tmp = a;
	a = b;
	b = tmp;
}

void change_pro(int *a, int *b)
{
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

int main()
{
	int a = 2;
	int b = 6;
	printf("数字 a=%d\n    数字 b=%d\n",a,b);
	change_pro(&a, &b);
	printf("交换后，数字 a=%d\n    数字 b=%d\n",a,b);
	// return 0;
}