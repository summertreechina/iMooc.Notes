puts "hello, world!\n"
puts 'hello, world!\n'

string = %Q{
Ruby 中的数据类型，大概如下：
Number
String
Bool
Array
Hash.new { |hash, key| hash[key] =  }
Hash 有点像对象与字典啊
Symbol : 大约就是不变的字符串
}
puts string

w = "小臭美";
s = "心肝宝贝";
puts "#{w} 是我的 #{s}"
