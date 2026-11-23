class LRUcache:
    def __init__(self,capacity):
        self.capacity=capacity
        self.cache={}
        self.hits=0
        self.misses=0

    def get(self,key):
        if key not in self.cache:
            self.misses+=1
            return None
        self.hits=+1
        value=self.cache[key]

        del self.cache[key]
        self.cache[key]=value

        return value

    def put(self,key,value):
        if key in self.cache:
            del self.cache[key]

        self.cache[key]=value

        if len(self.cache)>self.capacity:
            oldest_key=next(iter(self.cache))
            del self.cache[oldest_key]

    def print_stats(self):
        print(f"Hits {self.hits}")
        print(f"Misses: {self.misses}")

cache=LRUcache(2)
cache.put("a",1)
cache.put("b",2)
print(cache.get("a"))
cache.put("c",3)
print(cache.get("b"))