# coding:utf8

class UrlManager(object):
	"""docstring for UrlManager"""
	def __init__(self):
		# super(UrlManager, self).__init__()
		# self.arg = arg
		self.new_urls = set()
		self.old_urls = set()

	def add_new_url(self, url):
		if url is None:
			return
		if url not in self.new_urls and url not in self.old_urls:
			self.new_urls.add(url)

	def has_new_url(self, urls):
		if urls is None or len(urls) == 0:
			return
		for url in urls:
			self.add_new_url(url)

	def get_new_url():
		return len(self.new_urls) != 0

	def add_new_urls():
		new_url = self.new_urls.pop()
		self.old_urls.add(new_url)



































