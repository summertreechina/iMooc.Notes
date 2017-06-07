>>> Homebrew

>>> 安装brew
	安装方法很多种，但是由于系统和软件版本变换太大，所以只有官方的安装方法最靠谱'https://brew.sh/index_zh-cn.html'

>>> 使用 Homebrew 安装 Apple 没有预装但 你需要的东西。
	$ brew install wget

>>> Homebrew 会将软件包安装到独立目录，并将其文件软链接至 /usr/local 。
	$ cd /usr/local
	$ find Cellar
	Cellar/wget/1.16.1
	Cellar/wget/1.16.1/bin/wget
	Cellar/wget/1.16.1/share/man/man1/wget.1

$ ls -l bin
	bin/wget -> ../Cellar/wget/1.16.1/bin/wget

>>> Homebrew 不会将文件安装到它本身目录之外，所以您可将 Homebrew 安装到任意位置。

>>> 轻松创建你自己的 Homebrew 包。
	$ brew create https://foo.com/bar-1.0.tgz
	Created /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/bar.rb

>>> 完全基于 git 和 ruby，所以自由修改的同时你仍可以轻松撤销你的变更或与上游更新合并。
	$ brew edit wget # 使用 $EDITOR 编辑!


>>> Homebrew 的配方都是简单的 Ruby 脚本：
	class Wget < Formula
	  homepage "https://www.gnu.org/software/wget/"
	  url "https://ftp.gnu.org/gnu/wget/wget-1.15.tar.gz"
	  sha256 "52126be8cf1bddd7536886e74c053ad7d0ed2aa89b4b630f76785bac21695fcd"

	  def install
	    system "./configure", "--prefix=#{prefix}"         "
	    system "make", "install"
	  end
	end

>>> Homebrew 使 macOS 更完整。使用 gem 来安装 gems、用 brew 来安装那些依赖包。