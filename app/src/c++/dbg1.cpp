#include <iostream>

using namespace std;

void insertion_sort(int a[], int n)
{
    for (int i = 1; i < n; i++)
    {
        int key = a[i];
        int j = i - 1;
        while ((j >= 0) && (key < a[j]))
        {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}

int main(int argc, const char **argv)
{
    int a[] = {3, 2, 5, 6, 1, 7, 8};
    int n = sizeof(a) / sizeof(int);
    insertion_sort(a, n);
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
    return 0;
}